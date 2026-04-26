<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simula Servidor Conta Azul</title>
</head>
<body>
     <?php
        global $httpCode , $response, $data, $client_id, $client_secret, 
               $client_Base64, $token_acesso, $token_renova;
        
       //=== Direciona Se já tiver o codigo
        $httpCode = isset($httpCode)?$httpCode:0;
        $response = isset($response)?$response:"Codigo invalido";
        $client_id = isset($client_id)?$client_id:'3s7hmj1jf2fhesvdvfk7d3dpov';
        $client_secret = isset($client_secret)?$client_secret: 'css6mpnvip3nvqgvnt8vcmdep5mcorqjgk48850e5riu5087vcm';
        $client_Base64 = isset($client_Base64)?$client_Base64:base64_encode("$client_id:$client_secret");
        $token_acesso = isset($token_acesso)?$token_acesso:"";
        $token_renova = isset($token_renova)?$token_renova:"";


        $data_ini_base = isset($_GET["data_ini_base"])?$_GET["data_ini_base"]: date('Y-m-d', strtotime('2/1/26'));
        $data_fim_base = isset($_GET["data_fim_base"])?$_GET["data_fim_base"]:date('Y-m-d', strtotime('4/16/26'));
        $data_ini_lanca = isset($_GET["data_ini_lanca"])?$_GET["data_ini_lanca"]:date('Y-m-d', strtotime('1/1/26'));
        $data_fim_lanca = isset($_GET["data_fim_lanca"])?$_GET["data_fim_lanca"]:date('Y-m-d', strtotime('3/3/26'));
        $caminho = stripslashes('F:\\\!_Dados Gerais\\\!!!_2026\\\PBI_Junior\\\Insumos\\\\');

      

   

        if (!empty($_GET["code"])){
            gera_token();
            }
        
        function gera_codigo(){
            $url_codigo = "https://auth.contaazul.com/oauth2/authorize?response_type=code";
            $client_id = '3s7hmj1jf2fhesvdvfk7d3dpov'; //SEU_CLIENT_ID
            $redirect_uri = 'https://www.google.com/'; // 'SUA_URL_DE_REDIRECT'; // A mesma cadastrada no App
            $scope = 'openid+profile+aws.cognito.signin.user.admin';


            $url = $url_codigo . rawurldecode(http_build_query([
                '&client_id' => $client_id,
                'redirect_uri' => $redirect_uri,
                'state' => 'ESTADO', // String aleatória
                'scope' => 'openid+profile+aws.cognito.signin.user.admin',
                ]));
            
            header("Location: $url");
            exit();
        }

        function gera_token(){
            global $httpCode , $response, $data, $client_id, $client_secret, $client_Base64, $token_acesso, $token_renova;
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
            $postFields = [
                'grant_type' => 'authorization_code',
                'code' => $code,
                'redirect_uri' => $redirect_uri
            ];

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

            foreach ($dados as $linha) {
                // Grava o array no arquivo CSV
                fputcsv($arquivo, $linha, ";"); // Delimitador definido como ';'
            }

            fclose($arquivo);
            echo '----> Arquivo '.$arquivo . ' gerado com sucesso !!!!';
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
            global $httpCode , $response, $data, $client_id, $client_secret, $client_Base64, $token_acesso, $token_renova;

            $accessToken = $token_acesso; // Token obtido via OAuth2
            $apiUrl = 'https://api-v2.contaazul.com/v1/categorias';

            // Parâmetros de filtro
            $params = [
                //'busca_textual' => 'contas-a-pagar', // Filtro por texto
                'pagina'        => 1,                  // Página atual
                'tamanho'       => 20                  // Itens por página (10, 20, 50, 100)
            ];

            // Montar a URL com os filtros
            $url = $apiUrl . '?' . http_build_query($params);

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

   /// =====================================================================================

        echo "<h2>=========== Simulando Servidor Conta Azul ====================</h2>";
        echo  "<h3>=== Gerando Codigo === </h3>";
        // Verifica se o botão com name="botao_acao" foi submetido
        if(isset($_POST['Gera_codigo'])) {
            gera_codigo();
        }
       
        echo '<form method="post">';
        echo '<input type="submit" name="Gera_codigo" value="Gerar Codigo">';
        echo '</form><hr><br/>';


     
        echo  "<h3>=== Enviando Codigo para gerar Token === </h3>";
        $codigo = empty($_GET["code"])?"":$_GET["code"];
        echo "<form method='get' action='Conta_Azul_Servidor.php'>";
        echo "Codigo Acesso Dia: <input type='text' name='code' value=$codigo> ";
        echo "<input type='submit' name='botao_codigo' value='Gera Token'></br>";
        echo "Período Coleta: <input type='date' name='data_ini_base' value=$data_ini_base> a " ;
        echo "<input type='date' name='data_fim_base' value=$data_fim_base></br>";
        echo "Período Lançamento: <input type='date' name='data_ini_lanca' value=$data_ini_lanca> a ";
        echo "<input type='date' name='data_fim_lanca' value=$data_fim_lanca></br>";
        echo "Caminho: <input type='text' name='caminho' value=$caminho></br>";
        echo "Cliente ID: <input type='text' name='client_id' value=$client_id disabled> </br>";
        echo "Cliente Secret: <input type='text' name='client_secret' value=$client_secret disabled></br>";
        echo "Cliente Base64: <input type='text' name='client_Base64' value=$client_Base64 disabled></br>";

        echo "</form>";

        

        if (!empty($_GET["code"])) {
            if ($httpCode == 200) {
                echo "Token gerado com sucesso!<br>";
                //echo "Access Token: <br> " .$data['access_token'];
                echo "Access Token: <br> " .$token_acesso;
                echo "<hr><br/>Refresh Token: <br> " . $data['refresh_token'];
            }else{echo "<br/>Erro ao gerar token: " . $response;}
        }

        $dados = [
            ['Nome', 'Valor'],
            ['Codigo_Acesso_Dia', $codigo],
            ['Cliente_ID', $client_id],
            ['Cliente_Secret', $client_secret],
            ['Cliente_Base64', $client_Base64],
            ['Token_Acesso', $token_acesso],
            ['Data_ini', $data_ini_base],
            ['Data_fim', $data_fim_base],
            ['Data_venc_ini', $data_ini_lanca],
            ['Data_venc_fim', $data_fim_lanca],
            ['Caminho' ,$caminho]
        ];
        if (!empty($token_acesso)){
            grava_csv($caminho .'Acesso_Dados.csv',$dados);
            //categorias();
        }

        if(isset($_POST['ler_csv'])) {
            ler_csv();
        }
        echo '<form method="post">';
        echo "<input type='submit' name='ler_csv' value='Ler csv'></br>";
        echo '</form>';

        echo "<hr><br/>";

     
    ?>
</body>
</html>