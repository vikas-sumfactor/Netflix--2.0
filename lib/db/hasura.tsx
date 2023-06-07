


export async function findVideoIdByUser(token, userId, videoId) {
  const operationsDoc = `
  query findVideoIdByUserId($userId: String!, $videoId: String!) {
    stats(where: { userId: {_eq: $userId}, videoId: {_eq: $videoId }}) {
      id
      userId
      videoId
      favourited
      watched
    }
  }
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    "findVideoIdByUserId",
    {
      videoId,
      userId,
    },
    token
  );

  return response?.data?.stats.length === 0;
}

export async function createNewUser(token:any, metadata:any) {
  const operationsDoc = `
  mutation createNewUser($issuer: String, $email:String, $publicAddress:String){
    insert_users(objects: {email: $email, issuer: $issuer, publicAddress: $publicAddress}) {
      returning {
        issuer
        id
        email
      }
    }
  }
`;

  const { issuer, email, publicAddress } = metadata;
  const response = await queryHasuraGraphQL(
      operationsDoc,
      "createNewUser",
      {
          issuer,
          email,
          publicAddress,
      },
      token,
  );
  console.log({ response, issuer });
  return response;
}


export async function isNewUser(token:any, issuer:any) {
  const operationsDoc = `
  query isNewUser($issuer:String!) {
    users(where: {_and: {issuer: {_eq: $issuer}}}) {
      email
      id
      issuer
    }
  }
`;
  const response = await queryHasuraGraphQL(
      operationsDoc,
      "isNewUser",
      {
          issuer,
      },
      token,
  );
  console.log({ response, issuer });
  return response?.data?.users?.length === 0;
}

async function queryHasuraGraphQL(operationsDoc:any, operationName:any, variables:any, token:any) {

  const url:any = process.env.NEXT_PUBLIC_HASURA_ADMIN_URL;

  const result = await fetch(
      url,
      {
          method: "POST",
          headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
          },
          body: JSON.stringify({
              query: operationsDoc,
              variables: variables,
              operationName: operationName
          })
      }
  );

  return await result.json();
}
