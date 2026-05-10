//const { URLSearchParams } = require('url')
const btGeraCod = document.getElementById('bt_gera_codigo')
const codigo_dia = document.getElementById('code')
const url = window.document.getElementById('url')
const caminho = window.document.getElementById('caminho')
const urlAtual = new URL(window.location.href)
const code = urlAtual.searchParams.get("code")

if (code) {
        codigo_dia.value = code
    } else {        
        window.location.href = 'http://127.0.0.1:5500/Curso_JS/Modelos/Modelo.html' 

        //gera_codigo()
    }



btGeraCod.addEventListener('click', (event) => {
    
    window.location.href = 'http://127.0.0.1:5500/Conta_Azul/Conta_Azul.html' 
    /*event.preventDefault()
    if (code) {
        window.alert(code)
    }
    
    //url.innerHTML = `Veio da página: ${pagAnt}`
    codigo_dia.value = code
   */

})



function pag_origem(){
        const pagAnt = document.referrer
        if (pagAnt){
            const url = window.document.getElementById('url')
            url.innerHTML = `Veio da página: ${pagAnt}`
            window.alert(`Veio da página: ${pagAnt}`)
        } else {
                gera_codigo()
            //window.alert(`Acesso direto sem pagina anterior`)
        }
}


function gera_codigo(){
    //const fetch = require('node-fetch');

    const url_codigo = "https://auth.contaazul.com/oauth2/authorize?response_type=code&";
    const client_id = '3s7hmj1jf2fhesvdvfk7d3dpov'; //SEU_CLIENT_ID
    const redirect_uri = 'https://www.google.com/'; // 'SUA_URL_DE_REDIRECT'; // A mesma cadastrada no App
    const scope = 'openid+profile+aws.cognito.signin.user.admin';

    const params = { 
        'client_id' : client_id,
        'redirect_uri' : redirect_uri,
        'state' : 'ESTADO',
        'scope' : 'openid+profile+aws.cognito.signin.user.admin'

    };
    const queryString = new URLSearchParams(params).toString();
    const authUrl = decodeURIComponent(url_codigo+queryString);
    //const authUrl = decodeURIComponent("http://127.0.0.1:5500/Curso_JS/Modelos/Modelo.html");
    window.location.href = authUrl
}
    
    /* ===> Tentando criar elemento via JS e utiliza-lo no HTMLinner
     event.preventDefault()
     const div2 = document.createElement('div')
     div2.setAttribute('id','res')
     div2.innerHTML = authUrl
     const url = window.document.getElementById('url')
    url.innerHTML = authUrl

    window.alert(authUrl)
    console.log(authUrl);
    */
    



    /*
    $url = $url_codigo . rawurldecode(http_build_query([
        '&client_id' => $client_id,
        'redirect_uri' => $redirect_uri,
        'state' => 'ESTADO', // String aleatória
        'scope' => 'openid+profile+aws.cognito.signin.user.admin',
        ]));
    
    header("Location: $url");
    exit();
    */


function gera_codigo_js_fetch(){
        // Exemplo Conceitual em JavaScript (Node.js/Backend ou Frontend seguro)
        const fetch = require('node-fetch');

        // 1. Configurações da sua App
        const clientId = 'SEU_CLIENT_ID';
        const redirectUri = 'SUA_REDIRECT_URI'; // A mesma configurada no Portal

        // 2. Passo 1: Redirecionar usuário para a Conta Azul (fazer no navegador)
        const authUrl = `https://contaazul.com{redirectUri}&client_id=${clientId}&scope=sales,products&response_type=code`;
        // window.location.href = authUrl; // Redireciona o usuário

        // 3. Passo 2: Receber o código da URL (após redirect)
        // A URL de retorno será: sua_redirect_uri?code=CODIGO_RECEBIDO
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');
}

function gera_token_js_axios(){
    const axios = require('axios');
    const qs = require('querystring');

    // 1. Configurações da Aplicação
    const clientId = 'SEU_CLIENT_ID';
    const clientSecret = 'SEU_CLIENT_SECRET';
    const redirectUri = 'SUA_REDIRECT_URI';

    // 2. Base64 do Basic Auth (clientId:clientSecret)
    const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    // 3. Função para trocar o Código de Autorização pelo Token
    async function getAccessToken(authorizationCode) {
        try {
            const response = await axios.post('https://contaazul.com', 
                qs.stringify({
                    grant_type: 'authorization_code',
                    code: authorizationCode,
                    redirect_uri: redirectUri
                }), 
                {
                    headers: {
                        'Authorization': `Basic ${authHeader}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );
            
            console.log('Access Token:', response.data.access_token);
            console.log('Refresh Token:', response.data.refresh_token);
            return response.data;
        } catch (error) {
            console.error('Erro na autenticação:', error.response.data);
        }
    }

// O authorizationCode é obtido na URL após o usuário autorizar o app
// getAccessToken('CODIGO_RECEBIDO_NA_URL');

}




function gera_token(){
    httpCode , $response, $data, $client_id, $client_secret, $client_Base64, $token_acesso, $token_renova;
    // 1. Dados da sua aplicação (obtidos no portal de desenvolvedor Conta Azul)
    $client_id = '3s7hmj1jf2fhesvdvfk7d3dpov'; //SEU_CLIENT_ID
    $client_secret = 'css6mpnvip3nvqgvnt8vcmdep5mcorqjgk48850e5riu5087vcm'; //'SEU_CLIENT_SECRET';
    $code = $_GET['code']; // Código recebido no redirecionamento do Auth
    $redirect_uri = 'https://www.google.com/'; // 'SUA_URL_DE_REDIRECT'; // A mesma cadastrada no App
    $url_codigo = "https://auth.contaazul.com/oauth2/authorize?response_type=code";
    $scope = 'openid+profile+aws.cognito.signin.user.admin';


    // 2. URL de autenticação do Conta Azul
    $url = 'https://auth.contaazul.com/oauth2/token';

    // 3. Montar os campos da requisição POST
    $postFields = {
        'grant_type' : 'authorization_code',
        'code' : $code,
        'redirect_uri' : $redirect_uri
    };

    //echo "<br/> code: $code";
        
    // 4. Autenticação Basic (Client ID e Secret)
    $client_Base64 = base64_encode("$client_id:$client_secret");

    // 5. Configurar a requisição cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postFields));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Basic $client_Base64",
        "Content-Type: application/x-www-form-urlencoded"
    ]);

    // 6. Executar a requisição
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    // 7. Tratar a resposta
    if ($httpCode == 200) {
        $data = json_decode($response, true);
        $token_acesso = $data['access_token'];
        $token_renova = $data['refresh_token'];


        // Salve $data['access_token'] e $data['refresh_token'] no seu banco de dados
        //echo "Token gerado com sucesso!<br>";
        //echo "Access Token: " . $data['access_token'];
    } 

    // 8. Por minha conta Grava csv




}


function grava_csv($arq,$dados){
    /* 
    $dados = [
    ['Nome', 'Idade', 'Cidade'],
    ['João', '30', 'São Paulo'],
    ['Maria', '25', 'Rio de Janeiro']
    ];
    */
    $arquivo = fopen($arq, 'w');

    //foreach ($dados as $linha) {
        // Grava o array no arquivo CSV
    //    fputcsv($arquivo, $linha, ";"); // Delimitador definido como ';'
   // }

    fclose($arquivo);
    //echo '----> Arquivo '.$arquivo + ' gerado com sucesso !!!!';
}

function ler_csv(){
    $arquivo = fopen('saida.csv', 'r');
    if ($arquivo !== FALSE) {
        // Loop para ler linha por linha
        while (($linha = fgetcsv($arquivo, 1000, ",")) !== FALSE) {
            // $linha é um array com os elementos do CSV
            print_r($linha);
        }
        fclose($arquivo);
    }
}


function categorias(){
  //  global $httpCode , $response, $data, $client_id, $client_secret, $client_Base64, $token_acesso, $token_renova;

    $accessToken = $token_acesso; // Token obtido via OAuth2
    $apiUrl = 'https://api-v2.contaazul.com/v1/categorias';

    // Parâmetros de filtro
    $params = {
        //'busca_textual' => 'contas-a-pagar', // Filtro por texto
        'pagina'  : 1,                  // Página atual
        'tamanho' : 20                  // Itens por página (10, 20, 50, 100)
    };

    // Montar a URL com os filtros
    $url = $apiUrl + '?' . http_build_query($params);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $token_acesso,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    // Exibir resposta
    $categorias = json_decode($response, true);
    print_r($categorias);

}


