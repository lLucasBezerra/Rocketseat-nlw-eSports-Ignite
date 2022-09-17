import express from "express"

const app = express();

//para ir a alguma pagina deve-se ter uma function para dizer oq ela ira mostrar
app.get("/ads", (request, response) =>{
                //é necessario retornar algo, assim como ocorre no Java
    return response.json([
        {id: 1, name: "Anúncio 1"},
        {id: 2, name: "Anúncio 2"},
        {id: 3, name: "Anúncio 3"},
        {id: 4, name: "Anúncio 4"},
        {id: 5, name: "Anúncio 5"}
    ]);
                    //json para retornar algo do banco de dados
});

//a rota q essa pagina estará
app.listen(3333);
    //"quero q minha aplicação fique ouvindo novas requisições e que ela n pare a menos q o usuario fale para parar" - .listen()




    //baixado o typescript, mas utilizado apenas para desenvolvimento(npm i typescript -D), trocamos o arquivo .mjs para .ts
    //MAS o node n vai enteder o typescript, ENTAO teremos q criar um script no package.json
    //MAS NOVAMENTE, so isso n dará certo, entao vamos criar um arquivo de config do ts(npx tsc --init)
    //agora, npm run build
    //NAO DEU CERTO, entao vamo em tsconfig para adicionar em module o ES2020 e da run build noavamente
    //isso tudo para converter o arquivo em ts para um js
    //a biblioteca express não é feita em ts, entao temos q baixar mais um modulo npm install @types/espress -D
    // baixar o ts-node-dev para o processo de atualização do .ts para o .js n seja tão chato assim e adicionar o no package.json mais um script. "dev":"tsnd diretorio do aqurivo .ts(src/server.ts)"

    //ABORTAR MISSSÃO, deu erro algumas coisas, então foi melhor voltar o ES2020 para communJS e tirar o module (linha -6 comparando essa atual) e pnc do build tbm (usaremos npm run dev)
