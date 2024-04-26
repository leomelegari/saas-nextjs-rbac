# <span style="color: #854251; font-style: italic">Software as a Service (SaaS)</span>

## <span style="color: lightBlue">Tipos</span>

### <span style="color: lightYellow">Single Tenant</span>
- um software que é utilizado por UMA empresa
- PDV, cópias zip para instalação do software através do TeamViewer ou outro software de compartilhamento
- Instalação manual

### <span style="color: lightPink">Multi Tenant</span>
- Um software que é usado por mais de uma empresa com a mesma infraestrutura
- Multi Tentant não quer dizer multi subdomínios
- Multi Tenant não quer dizer um banco por empresa
- A grande maioria dos SaaS que são multi tenant não usam um banco por empresa
- Geralmente só será necessário criar um banco por empresa quando se tratar de contratos com o Governo, contratos individuais (itaú, por exemplo)

## <span style="color: lightBlue">Autorização</span>

### <span style="color: lightGreen">RBAC - Role Based Authorization Control</span>
- Roles: admin, billing, developer, member, etc
- Permissões específicas para cada role

### <span style="color: lightGreen">ABAC - Attribute Based Authorization Control</span>
- Admin pode editar um projeto
- Membro pode editar o título de um projeto, entre outras permissões
- Nível mais granular de permissões