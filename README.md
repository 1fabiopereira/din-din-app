<!-- Instalação -->
## Instalação
Para instalar o projeto basta clonar o repositório:
```
git clone https://github.com/1fabiopereira/din-din-app.git
```

<!-- Dependências -->
## Dependências
Com o projeto em sua máquina, vá para sua pasta:
 
 ```
    cd path/to/din-din-app
```

Para instalar as dependências execute: 

```
yarn add 
```

Caso esteja executando o projeto para IOS execute:
```
yarn add && (cd ios && pod install)
```

<!-- Execução -->
Para executar o projeto você precisa ter o ambiente previamente configurado para Android ou IOS ou para ambos depende como irá executar o projeto.
Antes de executar o comando para rodar o aplicativo certifique-se de que o `metro-bundler` esteja em execução, para isso abra uma janela no terminal e digite:

```
yarn run start --reset-cache 
```

Deixe o comando executando durante todo o tempo que estiver trabalhando no aplicativo. Após isso, em um nova aba do terminal basta executar o comando da plataforma desejada:

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
O presente projeto possui dois tipos de teste, os testes unitários e os testes end-to-end.

#### - Unitário
Para executar os testes unitário para executar: 
```
yarn run test:unit
```

#### - e2e
A execução dos testes `e2e` pode levar um pouco mais de tempo que os testes unitários pois para eles é necessário a compilação do app, além disso nesse projeto os testes unitários
foram configurados somente para executar no Simulado do IOS, isso ocorreu pois não estou com o ambiente android configurado totalmente na minha máquina.
Os testes `e2e` possuim algumas dependências globais para que sejam executados corretamente, são essas dependências:

- [appleSimUtils](https://github.com/wix/AppleSimulatorUtils)

Para instalar o `appleSimUtils` no MAC execute:

```
brew tap wix/brew
brew install --HEAD applesimutils
```

<!-- CONTRIBUTING -->
## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra um Pull Request

<!-- LICENSE -->
## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
