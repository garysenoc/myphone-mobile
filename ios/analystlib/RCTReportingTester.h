//
//  RCTReportingTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "DashboardUtility.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTReportingTester : NSObject <RCTBridgeModule>
@property (nonatomic) DashboardUtility *dashboardUtility;
@end

NS_ASSUME_NONNULL_END
