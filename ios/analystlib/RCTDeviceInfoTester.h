//
//  RCTDeviceInfoTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "CollectInfo.h"
#import "DeviceInformation.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTDeviceInfoTester : NSObject <RCTBridgeModule>
@property (nonatomic) CollectInfo *collectInfo;
@property (nonatomic) DeviceInformation *deviceInformation;
@end

NS_ASSUME_NONNULL_END
