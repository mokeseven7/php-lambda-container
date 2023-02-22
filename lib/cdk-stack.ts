import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {DockerImageFunction, DockerImageCode} from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';
import { CfnOutput } from 'aws-cdk-lib';
import { CfnPermission,  } from 'aws-cdk-lib/aws-lambda';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2'
import { CfnRoute } from 'aws-cdk-lib/aws-ec2';
import { Deployment, RestApi } from 'aws-cdk-lib/aws-apigateway';

export class CdkStack extends cdk.Stack {
    fn: string;
    farn: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const dockerfile = path.join(__dirname, '/../');

    const image = new DockerImageFunction(this, 'LambdaDocker', {
      code: DockerImageCode.fromImageAsset(dockerfile),
    });

    this.fn = image.functionName;
   

   
  
    new CfnOutput(this, 'FunctionARN', {value: this.fn});

   
  }
}
