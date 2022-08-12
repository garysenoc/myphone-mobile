//
//  RCTCameraTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTCameraTester.h"

@implementation RCTCameraTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _cameraTestViewController = [[CameraTestViewController alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
