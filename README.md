# Distributed databases using OracleDB

## Build Docker containers with OracleDB

### Connecting the local database with the remote one

```shell
sudo docker compose up -d
```

:exclamation: __Running the containers first time__ will cause __unauthorized error__.

```shell
[+] Running 2/2
 ✘ serverpatients Error                                                    0.9s 
 ✘ servermanagement Error                                                  0.9s 
Error response from daemon: Head "https://container-registry.oracle.com/v2/database/enterprise/manifests/latest": unauthorized: authentication required
```

## Authenticating on container registry

1. [Signing](<https://login.oracle.com/mysso/signon.jsp>) or [create an account](https://profile.oracle.com/myprofile/account/create-account.jspx) at Oracle.com
2. If you signed up, verify your email
3. Go to [Database container derictory](https://container-registry.oracle.com/ords/f?p=113:4:117527266471116:::4:P4_REPOSITORY,AI_REPOSITORY,AI_REPOSITORY_NAME,P4_REPOSITORY_NAME,P4_EULA_ID,P4_BUSINESS_AREA_ID:9,9,Oracle%20Database%20Enterprise%20Edition,Oracle%20Database%20Enterprise%20Edition,1,0&cs=3iLUcCqamva-NxYGXjAd6IcmXka5TcQLIMPUr42OXZHaqLZz8CQewG-aAmnJtkDO6bKltfDPLr3zqnsTaNEdG4g)
4. Accept the terms and conditions - [See image](./assets/image.png)
5. After you've done that, you should see - [See image](./assets/image-1.png)
6. Open the terminal in the current project directory and run ```sudo docker login container-registry.oracle.com```
7. Open the terminal and run ```sudo docker pull container-registry.oracle.com/database/enterprise:latest```
8. You should see the message __"Login Succeeded"__

## Authentiacate to Docker

1. Go to [Docker hub](https://hub.docker.com/signup) and create an account
2. Then run

    ```shell
    sudo docker login
    ```

3. Login using credentials for Docker hub
4. You should see the message __"Login Succeeded"__

## Compose the Docker Containers

To bring up the Docker containers, run the following command:

```bash
sudo docker-compose up -d
```

### Docker Images Building

Below is an image illustrating the process of Docker composing:

![Docker composing process](./assets/composing-docker.png)

### Access Databases Outside of Docker Container

In this guide, we'll use __DBeaver__ as an example to demonstrate how to connect to Oracle databases running in Docker containers.

#### Pre-requisites

- Two running containers: one for the management database listening on port 7090, and another for the patients database listening on port 7091 (as configured in your `docker-compose` file).

#### Steps

1. **Launch DBeaver**
   - Start the DBeaver application.

2. **Create a New Connection**
   [Create New Connection Image](./assets/dbeaver-new-connection.png)

3. **Select Oracle Database**
   [Select Oracle Database Image](./assets/dbeaver-oracle-db.png)

---

#### Connect to the Management Database

1. __Host__: `localhost`
2. __Database (Service Name)__: `management`
3. __Port__: `7090`
4. __Username__: Enter `sys` and set the role to `SYSDBA`
   [Set Role to SYSDBA Image](./assets/dbeaver-role-sysdba.png)
5. __Password__: `Master2023`
6. __Test Connection__: Ensure everything is set up correctly.
7. __Finish__: Save the connection.

---

#### Connect to the Patients Database

1. __Host__: `localhost`
2. __Database (Service Name)__: `patients`
3. __Port__: `7091`
4. __Username__: Enter `sys` and set the role to `SYSDBA`
   [Set Role to SYSDBA Image](./assets/dbeaver-role-sysdba.png)
5. __Password__: `Master2023`
6. __Test Connection__: Ensure everything is set up correctly.
7. __Finish__: Save the connection.
