#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SourplumsStack } from '../lib/sourplums-stack';

const app = new cdk.App();
new SourplumsStack(app, 'SourplumsStack', {
});