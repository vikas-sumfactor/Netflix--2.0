async function queryHasuraGQL(operationsDoc:any, operationName:any, variables:any) {

    const url:any = process.env.NEXT_PUBLIC_HASURA_ADMIN_URL;

    const result = await fetch(url, {
      method: "POST",
      headers: {
        Authorization :
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjg1NTE0MjEzLCJleHAiOjE2ODYxMTkwNjIsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJ1c2VyIiwiYWRtaW4iXSwieC1oYXN1cmEtZGVmYXVsdC1yb2xlIjoidXNlciIsIngtaGFzdXJhLXVzZXItaWQiOiJub3R2aWthcyJ9fQ.DE9-UmDhFwwpnHMDYIPuwx-YNLuzFioCAWZo0NO1RaY"
       
       // "x-hasura-admin-secret": process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET,
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName,
      }),
    });
    return await result.json();
  }
  
  function fetchMyQuery() {
    const operationsDoc = `
      query MyQuery {
        users {
          email
          id
          issuer
          publicAddress
        }
      }
    `;
    return queryHasuraGQL(operationsDoc, "MyQuery", {});
  }
  
  export async function startFetchMyQuery() {
    
    const { errors, data } = await fetchMyQuery();
    if (errors) {
      // handle those errors like a pro
      console.error(errors);
    }
    // do something great with this precious data
    console.log(data);
  }
  startFetchMyQuery();