# PotentialCrud
### Front-End 
1. yarn install
2. yarn start

### Testes
1. yarn test

==========================================================

### Back-End
1. npm install
2. npm install -g @adonisjs/cli
2. npm i --save pg
3. Executar Script para criação da base de dados. Arquivo na raiz do projeto

#### 4. Configurar arquivo .ENV: 
##### 4.1. DB_CONNECTION=pg
##### 4.2. DB_HOST=127.0.0.1
##### 4.3. DB_PORT=5432
##### 4.4. DB_USER=postgres
##### 4.5. DB_PASSWORD=root "Verificar qual senha está definida no banco"
##### 4.6. DB_DATABASE=adonis

5. adonis migration:run
6. adonis make:seed Develop
7. adonis serve --dev