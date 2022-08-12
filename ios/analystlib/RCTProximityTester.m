//
//  RCTProximityTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTProximityTester.h"

@implementation RCTProximityTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _proximityTester = [[ProximityTester alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
