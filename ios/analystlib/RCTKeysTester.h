//
//  RCTKeysTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "HardwareKeysDetector.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTKeysTester : NSObject <RCTBridgeModule>
@property (nonatomic) HardwareKeysDetector *hardwareKeysDetector;
@end

NS_ASSUME_NONNULL_END
