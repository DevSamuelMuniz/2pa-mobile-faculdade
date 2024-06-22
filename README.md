O NutriLife é um aplicativo móvel desenvolvido com React Native e Expo, projetado para ajudar usuários a gerenciar suas dietas e nutrição de maneira eficiente. Ele oferece funcionalidades para capturar imagens de alimentos, obter informações nutricionais desses alimentos, além de fornecer suporte para múltiplos idiomas através do i18n-js e i18next.

Funcionalidades Principais
Captura de Imagem de Alimentos: Utiliza o expo-image-picker para permitir que os usuários capturem fotos dos alimentos que estão consumindo.

Consulta de Informações Nutricionais: Integração com APIs ou bases de dados para fornecer dados nutricionais dos alimentos capturados.

Gerenciamento de Idiomas: Suporta múltiplos idiomas usando i18n-js e i18next.

Navegação: Implementado com o React Navigation para uma navegação suave e intuitiva entre telas.

Tecnologias Utilizadas
React Native: Framework JavaScript para desenvolvimento de aplicativos móveis nativos.

Expo: Plataforma e conjunto de ferramentas para desenvolvimento React Native, que facilita o desenvolvimento e a publicação de aplicativos.

Para executar o projeto localmente, siga os passos abaixo:

Clonar o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/nutrilife.git
cd nutrilife
Instalar as dependências:

bash
Copiar código
npm install
Scripts Disponíveis
No diretório do projeto, você pode executar:

npm start: Inicia o projeto Expo.
npm run android: Inicia o projeto Expo especificamente para Android.
npm run ios: Inicia o projeto Expo especificamente para iOS.
npm run web: Inicia o projeto Expo para visualização web.
Dependências Principais
@react-navigation/native e @react-navigation/native-stack: Para gerenciar a navegação entre telas.

expo e expo-constants: Utilizados para configurações e funcionalidades específicas do Expo.

expo-image-picker e react-native-image-picker: Para captura de imagens dos alimentos.

axios: Cliente HTTP para fazer requisições de API.

react-native-vector-icons: Ícones vetoriais personalizáveis para React Native.

Contribuição
Contribuições são bem-vindas! Para mudanças importantes, abra uma issue primeiro para discutir o que você gostaria de mudar.

Licença
Este projeto é licenciado sob a MIT License. Consulte o arquivo LICENSE para mais detalhes.
