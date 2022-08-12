//
//  RCTReportingTester.m
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import "RCTReportingTester.h"

@implementation RCTReportingTester

- (instancetype)init
{
  self = [super init];
  if(self){
    _dashboardUtility = [[DashboardUtility alloc] init];
  }
  return self;
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE();

@end
