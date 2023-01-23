# lab.meltano

- one day understand meltano end to end
- goal 
    - create an etl pipeline between postgres to s3 bucket


**how i built this**
Reference : 
- install meltano

```bash
pip install --upgrade pip
pip install meltano

# intialize project
mkdir src
cd src
meltano init .
```
**local dynamodb**

- hosting local dynamodb
- adding dynamoDB tap
- gui for dynamoDB : [nosql workbench](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/workbench.html)

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html


```bash

# install nosql workbench
brew install --cask nosql-workbench
```

**local postgres**
- added postgres docker compose service
- added meltano target-postgres
- gui for postgres : datagrip

```bash
meltano add loader target-postgres
```


## shipping to production
- Reference : https://docs.meltano.com/guide/production discusses how to ship your meltano project to production
