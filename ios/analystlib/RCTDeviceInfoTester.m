//
//  RCTDeviceInfoTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTDeviceInfoTester.h"

@implementation RCTDeviceInfoTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _collectInfo = [[CollectInfo alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(collectAllInfo)
{
  _deviceInformation = [_collectInfo collectAllInfo];
}

RCT_EXPORT_METHOD(isSIMPresent)
{
//  _deviceInformation.isSIMPresent;
}

RCT_EXPORT_METHOD(manufacturer)
{
//  _deviceInformation.manufacturer;
}

RCT_EXPORT_METHOD(modelName)
{
//  _deviceInformation.modelName;
}

RCT_EXPORT_METHOD(memorySize)
{
//  _deviceInformation.memorySize;
}

@end
