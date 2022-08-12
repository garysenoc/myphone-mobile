//
//  RCTWifiTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "WifiTester.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTWifiTester : NSObject <RCTBridgeModule>
@property (nonatomic) WifiTester *wifiTester;
@end

NS_ASSUME_NONNULL_END
