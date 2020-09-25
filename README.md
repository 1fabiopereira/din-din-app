<!-- Instalação -->
## Instalação
Para baixar o projeto execute:
```
git clone https://github.com/1fabiopereira/din-din-app.git
```

<!-- Dependências -->
## Dependências
Com o projeto em sua máquina, vá para sua pasta do projeto:
 
 ```
    cd path/to/din-din-app
```

Para instalar as dependências execute: 

```
yarn install 
```

Caso deseje rodar o projeto para IOS execute:
```
yarn install && (cd ios && pod install)
```

<!-- Execução -->
Para executar o projeto você precisa ter o ambiente previamente configurado para Android ou IOS, dependendo de como pretende executá-lo, a configuração do ambiente pode ser encontrada na documentação do [React Native](https://reactnative.dev/docs/environment-setup).

Com o ambiente devidamente configurado, antes de executar o comando para rodar o aplicativo certifique-se de que o `metro-bundler` esteja em execução, para isso abra uma janela no terminal e digite:

```
yarn run start --reset-cache 
```

Deixe o comando executando durante todo o tempo que estiver trabalhando no aplicativo. Após isso, 
em um nova aba do terminal basta executar o comando da plataforma desejada:

- Android
    ``` 
        react-native run-android
    ```
  
- IOS
    ```
        react-native run-ios 
    ```

<!-- Tests -->
## Tests
O presente projeto possui duas categorias de testes, unitários e end-to-end.

#### - Unitário
Para executar os testes unitários digite no terminal: 
```
yarn run test:unit
```

#### - e2e
A execução dos testes `e2e` pode levar um pouco mais de tempo que os testes unitários, pois para eles é necessário a compilação do app, é importante resaltar que neste projeto os testes `e2e`
foram configurados somente para executar no simulador do IOS, isso ocorreu, pois não estou com o ambiente Android configurado totalmente na minha máquina.
Os testes `e2e` possuem algumas dependências globais para que sejam executados corretamente, são essas dependências:

- [appleSimUtils](https://github.com/wix/AppleSimulatorUtils)

Para instalar o `appleSimUtils` no MAC execute:

```
brew tap wix/brew
brew install --HEAD applesimutils
```
<!-- Arquitetura -->

## Arquitetura
Para entender melhor a escolha da arquitetura do projeto que no caso é o [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux) vou explicar um pouco sobre as vantagens que observei até o momento em relação a outras abordagens.

 Arquiteturas baseadas em `separação por funções` ou `separação por módulos` carregam consigo problemas que aparecem quando um projeto começa a crescer, geram muitos arquivos e consequentemente muitas importações e em alguns casos duplicidade de código, o que por sua vez dificulta a manutenção. 
 
 Ao contrário dessas abordagens o `Duck Pattern` busca a união de actions, reducers e types em um único arquivo, o que parece estranho em um primeiro momento, pois a primeira coisa que vem a cabeça é o tamanho que esse arquivo unificado deve assumir,
 mas é ai que ocorre um engano, esse arquivo é pequeno, contento na maioria dos casos não mais que 5 a 6 actions, caso tenha um arquivo muito maior que isso basta rever e dividir esse arquivo em arquivos menores.
 
Utilizar o `Duck Pattern` é simples e inicialmente em projetos pequenos não observa-se vantagem nenhuma
 em relação a outras aboradagens, seus benefícios tornam-se evidentes quando a aplicação começa a ter dezenas ou centenas de funcionalidades, nesse momento observa-se que adicionar ou manter essas funcionalidades tem a mesma complexidade de quando o app era pequeno.
 
Para a construção de qualquer projeto gosto de tornar a estrutura flexível a mudanças, por esse motivo sempre tento evitar strings e cores diretamente no código, por isso todos os textos são carregados por uma lib de internacionalização, o que facilita na hora de utilizar 
outros idiomas e até mesmo em localizar e alterar um texto. A mesma regra se aplica as cores, é muito mais simples gerenciar recursos que estão centralizados.

<!-- Estrutura -->
## Estrutura
Abaixo encontra-se a estrutura organizacional do projeto:

```
├── README.md
├── __tests__
│   └── unit
├── android
├── app.json
├── babel.config.js
├── e2e
│   ├── init.js
│   └── views
├── index.js
├── ios
├── metro.config.js
├── package.json
├── src
│   ├── assets
│   ├── components
│   ├── config
│   ├── config.js
│   ├── lib
│   ├── navigation
│   ├── services
│   ├── store
│   └── views
└── yarn.lock
```

<!-- Contribuição -->
## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request
