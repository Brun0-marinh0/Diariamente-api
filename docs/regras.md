# MVP — Diário Online

## Objetivo

Permitir que uma pessoa registre, ao longo do tempo, como está se sentindo — através de texto,
uma foto opcional e um nível de emoção — criando um histórico que, no futuro, poderá ser usado
por um psicólogo para entender melhor a evolução emocional de um paciente entre as sessões.

O MVP foca em fazer **uma pessoa** registrar e consultar o próprio diário com segurança.
O vínculo com o psicólogo fica para uma fase seguinte (ver "Fora do escopo").

## Papéis (personas)

- **Usuário (paciente)**: cria conta, escreve no diário, vê e edita os próprios registros.
- **Psicólogo**: não existe ainda como papel funcional no MVP — o campo `role` já existe no
  modelo de dados para não precisar migrar tabela depois, mas nenhuma tela ou permissão
  especial é construída agora.

## Requisitos funcionais

### 1. Conta e autenticação
- Criar conta com nome, e-mail e senha.
- Fazer login e receber um token de acesso (JWT).
- Toda rota do diário exige estar autenticado.

### 2. Registro de diário
- Criar um registro com:
  - **texto** (opcional) — o relato do dia.
  - **nível de emoção** (obrigatório) — escala de 1 (muito ruim) a 5 (muito bem).
  - **foto** (opcional) — uma imagem por registro.
- Listar todos os registros do próprio usuário, do mais recente para o mais antigo.
- Ver o detalhe de um registro específico.
- Editar um registro (texto, emoção e/ou foto).
- Remover um registro.

### 3. Fotos
- Upload de imagem (jpg, png ou webp), limite de 5MB.
- Armazenamento local em disco no MVP (sem serviço de nuvem por enquanto).

## Requisitos não funcionais

- Cada usuário só pode ver e alterar os **próprios** registros (isolamento por dono).
- Senha nunca é armazenada em texto puro (hash com bcrypt).
- API no padrão REST, respostas em JSON.
- Toda entrada da API é validada antes de chegar à lógica de negócio.

## Modelo de dados (alto nível)

**User**
| Campo | Tipo | Observação |
|---|---|---|
| id | uuid | gerado automaticamente |
| name | string | |
| email | string | único |
| password | string | armazenado com hash |
| role | enum | `patient` \| `psychologist` (não usado ainda no MVP) |
| createdAt | date | |

**DiaryEntry**
| Campo | Tipo | Observação |
|---|---|---|
| id | uuid | gerado automaticamente |
| text | string \| null | opcional |
| photoUrl | string \| null | opcional |
| emotionLevel | int | 1 a 5, obrigatório |
| authorId | uuid | dono do registro |
| createdAt / updatedAt | date | |

## Fora do escopo do MVP (próximas fases)

- Vínculo psicólogo↔paciente e visualização compartilhada de registros.
- Migrations de banco (o MVP usa `synchronize: true` do TypeORM, só para desenvolvimento).
- Testes automatizados.
- Armazenamento de fotos em nuvem (S3, Cloudinary etc.).
- Paginação na listagem de registros.
- Gráficos/relatórios de evolução emocional ao longo do tempo.
- Múltiplas emoções ou tags por registro (ex.: "ansioso" + "cansado" no mesmo dia).
- Notificações ou lembretes para escrever no diário.

## Critério de pronto (Definition of Done) do MVP

- [ ] Uma pessoa consegue criar conta e fazer login.
- [ ] Uma pessoa consegue criar um registro com texto, emoção e foto.
- [ ] Uma pessoa consegue listar, ver, editar e remover seus próprios registros.
- [ ] Uma pessoa **não** consegue ver ou alterar registros de outra conta.
- [ ] O projeto roda localmente a partir do zero seguindo o README (setup + `npm run start:dev`).