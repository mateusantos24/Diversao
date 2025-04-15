# 🎉 Diversão
Sistema de utilidades para o módulo de diversão — desenvolvido por **Rei Ayanami**

Este módulo integra comandos leves e interativos ao Projeto Íris, focados em entretenimento, piadas, interações engraçadas e mais!

## ✅ Requisitos
- ✅ Projeto Íris instalado: [github.com/KillovSky/iris](https://github.com/KillovSky/iris)
- ✅ Biblioteca [Baileys](https://github.com/WhiskeySockets/Baileys)
- ⚠️ Alguns comandos utilizam **Canvas**, então é necessário instalar os módulos corretamente (veja abaixo)

## 📦 Módulos Necessários
Para garantir o funcionamento completo do módulo Diversão, certifique-se de instalar os seguintes pacotes:

### ⚠️ Problemas comuns com o Canvas
Se der erro ao instalar, você pode forçar a instalação ou usar o sharp como alternativa:

```bash
npm i sharp@0.30.7
# ou
npm i canvas --force
```

## 📥 Instalação
1. Copie todos os arquivos do módulo para a pasta:
```
lib/Commands/Diversao
```

2. No arquivo `lib/Commands/Main/Construct`, adicione ou edite a seção:
```javascript
"Diversao": [
    "diversao",
    "tristerealidade",
    "perfect",
    "gtav", 
    "brazzers"
]
```

3. Instale os módulos necessários (conforme explicado acima)
4. Reinicie o bot ou use um comando de recarregamento
5. Teste com `{prefix}diversao` para ver o menu de opções

## 📝 Notas adicionais
Leia com atenção o modo de uso através do comando:
```
{prefix}diversao
```
Assim você poderá explorar todos os recursos incluídos neste módulo divertido!
