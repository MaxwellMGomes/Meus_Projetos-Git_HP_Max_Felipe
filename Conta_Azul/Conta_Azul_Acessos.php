<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gera dados Conta Azul</title>
</head>
<body>
    //
     <?php

        if (isset($_GET['code'])){
          $codigo_autorizado = $_GET['code'];
        };
    ?>

    <?php

      // 1. Dados da sua aplicação (obtidos no portal de desenvolvedor Conta Azul)
      $client_id = '3s7hmj1jf2fhesvdvfk7d3dpov'; //SEU_CLIENT_ID
      $client_secret = 'css6mpnvip3nvqgvnt8vcmdep5mcorqjgk48850e5riu5087vcm'; //'SEU_CLIENT_SECRET';
      //$code = $_GET['code']; // Código recebido no redirecionamento do Auth
      $redirect_uri = 'https://www.google.com/'; // 'SUA_URL_DE_REDIRECT'; // A mesma cadastrada no App
      $url_codigo = "https://auth.contaazul.com/oauth2/authorize?response_type=code";
      $scope = 'openid+profile+aws.cognito.signin.user.admin';


    $url = $url_codigo . rawurldecode(http_build_query([
        '&client_id' => $client_id,
        'redirect_uri' => $redirect_uri,
        'state' => 'ESTADO', // String aleatória
        'scope' => 'openid+profile+aws.cognito.signin.user.admin',
        ]));


    echo "<br/> Url: $url, codigo: $cod lista: $lista";

    echo "<form method='get' action='http://localhost/conta_azul/Conta_Azul_Servidor.php'>";
    echo "<input type='submit' name='codigo' value='Retorna Codigo'/>";


  /*

    $url = "https://auth.contaazul.com/oauth2/authorize?response_type=code&client_id=3s7hmj1jf2fhesvdvfk7d3dpov&redirect_uri=https://www.google.com/&state=ESTADO&scope=openid+profile+aws.cognito.signin.user.admin";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Retorna o conteúdo como string
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
    $resultado = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $url_final = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
    curl_close($ch);

    echo "<br/> Resultado: $resultado, Http codigo: $httpCode , url_final: $url_final";


      //$codigo = <a href=$url_codigo ."&client_id=" .$client_id."&redirect_uri=" .$redirect_uri ."&state=ESTADO&scope=openid+profile+aws.cognito.signin.user.admin">Gerar Codigo Acesso</a>;

     // $codigo = file_get_contents('https://auth.contaazul.com/login?response_type=code&client_id=3s7hmj1jf2fhesvdvfk7d3dpov&redirect_uri=https://www.postman.com/&state=ESTADO&scope=openid+profile+aws.cognito.signin.user.admin');




// http://localhost/login?response_type=code&client_id=3s7hmj1jf2fhesvdvfk7d3dpov&redirect_uri=https://www.postman.com/&state=ESTADO&scope=openid+profile+aws.cognito.signin.user.admin


     // echo "<br/> Codigo_Autorização: $codigo"  ;
     
     // 2. URL de autenticação do Conta Azul
      $url = 'https://auth.contaazul.com/oauth2/token';

      // 3. Montar os campos da requisição POST
      $postFields = [
          'grant_type' => 'authorization_code',
          'code' => $code,
          'redirect_uri' => $redirect_uri
      ];

        
      // 4. Autenticação Basic (Client ID e Secret)
      $credentials = base64_encode("$client_id:$client_secret");

      //echo "<br> code: $code, client_id:$client_id, client_secret: $client_secret  ";
      //echo "<br> credenciais: $credentials";

      // 5. Configurar a requisição cURL
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_POST, true);
      curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postFields));
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_HTTPHEADER, [
          "Authorization: Basic $credentials",
          "Content-Type: application/x-www-form-urlencoded"
      ]);

      // 6. Executar a requisição
      $response = curl_exec($ch);
      $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
      curl_close($ch);

      // 7. Tratar a resposta
      if ($httpCode == 200) {
          $data = json_decode($response, true);
          // Salve $data['access_token'] e $data['refresh_token'] no seu banco de dados
          echo "Token gerado com sucesso!<br>";
          echo "Access Token: " . $data['access_token'];
      } else {
          echo "<br/>Erro ao gerar token: " . $response;
      }

    */
      ?>


 <br>
 <a href="Conta_Azul_Servidor.html">Voltar</a>

 
 <!-- https://auth.contaazul.com/login?response_type=code&client_id=3s7hmj1jf2fhesvdvfk7d3dpov&redirect_uri=https://www.postman.com/&state=ESTADO&scope=openid+profile+aws.cognito.signin.user.admin -->

 <!--*curl --location 'https://auth.contaazul.com/oauth2/token' \
--header 'Authorization: Basic BASE64(SEU_CLIENT_ID:SEU_CLIENT_SECRET)' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=CODIGO_AUTORIZACAO' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'redirect_uri=SUA_URL_REDIRECIONAMENTO' -->


</body>
</html>

