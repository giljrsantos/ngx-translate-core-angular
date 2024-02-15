# Ngx Translate Angular

Neste projeto, usei o `@ngx-translate/core`, para fazer a tradução do texto da pagina. O `@ngx-translate/core` é uma biblioteca popular para internacionalização (i18n) em aplicações Angular. Aqui estão os passos básicos para configurar e usar o `@ngx-translate/core` em um projeto Angular.

```json
Angular CLI: 16.2.11
Node: 18.16.0
Package Manager: npm 9.5.1
```

### Passo 1: Instalação
Após a criação do projeto Angular através da linha de comando cli `ng new <NomeProjeto>`, você deve fazer instalação das dependência `@ngx-translate/core` e `@ngx-translate/http-loader`, com o seguinte comando:
```json
npm install @ngx-translate/core @ngx-translate/http-loader --save
```

### Passo 2: Configuração do Módulo
Neste segundo passo, você vai fazer a configuração do modulo. Repare que o return da linha 2, o segundo parâmetro, eu estou informando em que pasta estão os arquivos de tradução. Ou seja, o arquivo com o conteúdo de cada idioma. E o terceiro parâmetro, informo a extensão do arquivo `.json`.
<img src="src\assets\img\screen-1.png" width="100%">

### Passo 3: Configuração do Serviço
No arquivo app.component.ts, deve ser feito a configuração, quais os idiomas que o sistema irá usa, e também qual vai ser o idioma default. Ou seja, quando o usuário entrar no site, o conteúdo que vai é do idioma que foi informado como default.
<img src="src\assets\img\screen-2.png" width="100%">


### Passo 4: Uso nos Componentes
O uso do serviço ngx-translate/core é bem simmples. Agora após fazer a configuração no app.module.ts e no app.component.ts, basta no template html colocar a chave do arquivo .json de tradução dentro da interpolação angular com o pipe translate `{{ menu.boletim | translate }}`
<img src="src\assets\img\screen-3.png" width="100%">

### Passo 5: Configuração de Traduções
Crie arquivos de tradução para os idiomas suportados. Por exemplo, crie arquivos `en.json`, `pt.json`, `es.json`, `fr.json`:
```json
    "menu": {
        "boletim": "Boletim"
    }
```
```json
    "menu": {
        "boletim": "Bulletin"
    }
```
```json
    "menu": {
        "boletim": "Boleta de Calificaciones"
    }
```
```json
    "menu": {
        "boletim": "Report card"
    }
```

### Passo 6: Adicionando o Seletor de Idioma

Adicionando um seletor de idioma para permitir que alterem o idioma em tempo de execução. Criamos uma tag HTML select, e passamos para quais idiomas iremos traduzir os textos do site. Dentro do evento `(change)=""` passamos a função que enviar o valor da sigla do idioma a qual desejamos traduzir o texto.
<img src="src\assets\img\screen-4.png" width="100%">
No component do seletor do idioma, criamos a função `changeLanguage()` e recebemos uma assinatura que esta sendo passado no momento que selecionamos um idioma. Dessa forma, informo que o TranslateService deve usar o novo idioma selecionado. Dessa forma, todo o conteúdo da página é alterado para o idioma selecionado.
<img src="src\assets\img\screen-5.png" width="100%">

<h1 align="center">💻 Desenvolvido Por: Gilberto Júnior</h1>