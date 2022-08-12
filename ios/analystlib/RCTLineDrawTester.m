//
//  RCTLineDrawTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTLineDrawTester.h"

@implementation RCTLineDrawTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _lineDrawViewController = [[LineDrawViewController alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
