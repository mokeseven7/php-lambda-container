# PHP Lambda Container  

[Based on the AWS Sample](https://github.com/aws-samples/php-examples-for-aws-lambda/tree/master/0.7-PHP-Lambda-functions-with-Docker-container-images), but uses CDK instead of sam, and the required changes to the Dockerfile to use php 8.2 instead of 7.3. 

TODO: Need to write the api gateway mapping code when I have a bit of time in order to be a complete example (as thiers is). 

## Steps

You must have the docker daemon running on your system for this to work. Doesn't matter if its mac or nix', you just need the `docker` command in your PATH, and the daemon running. 

>Clone Repo
```
git clone git@github.com:mokeseven7/php-lambda-container.git
```
>cd into directory
```
cd php-lambda-container
```

>Install Node Deps
```
npm install
```

>Compile ts to js
```
npm run build
```

>CDK needs some roles and a bucket, you dont need to run this if you already have run it once for a different cdk project in the region your deploying to. 
```
cdk bootstrap
```

>Deploy the project. 
```
cdk deploy
```

You can look in cloudformation for the resources it created, ECS private repos for the image itself, and then lambda for the application/function.