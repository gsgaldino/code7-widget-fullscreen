# Widget fullscreen

Um projeto simples que cria uma instância do nosso chatbot (Boteria) e sobrescreve alguns estilos..

## Parâmetros disponíveis

Os parâmetros devem ser informados na URL, separados por "&".
Exemplo:

```
https://minhaurl.com?id=MEU_ID_DO_BOT&parametro=valor
```

| Parâmetro           | Descrição                            | Obrigatório |
| ------------------- | ------------------------------------ | ----------- |
| **id**              | Identificador do BOT                 | sim         |
| **bot-name**        | Nome do BOT                          | não         |
| **bot-bg-color**    | Cor dos balões do BOT                | não         |
| **bot-text-color**  | Cor dos textos enviados pelo BOT     | não         |
| **user-bg-color**   | Cor dos balões do usuário            | não         |
| **user-text-color** | Cor dos textos enviados pelo usuário | não         |


## Scripts disponíveis

```
npm run dev
```

Executa o projeto em modo de desenvolvimento
