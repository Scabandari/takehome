Run instructions:

You can get your Postgres db going by starting the docker-compose file:
  - cd docker_compose
  - docker-compose up --build

Note: you may want to chage this line in the docker-compose file to point to your preferred db location

      - ${HOME}/postgres_data/takehome:/var/lib/postgresql/data

       
Or get an empty postgres going by your favorite metyhod, access it using PgAdmin & run the only migration file: 

    fast_api/migrations/init.sql
  
Start your server:
- cd fast_api
- python3.10 -m venv myenv && source myenv/bin/activate
- pip install -r requirements.txt
- ./myenv/bin/uvicorn main:app --host 0.0.0.0 --port 8000
 
Start your client:
- cd client
- yarn
- yarn build
- yarn global add serve      (If not available already)
- serve -s build
