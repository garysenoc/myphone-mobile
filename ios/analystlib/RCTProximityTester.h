//
//  RCTProximityTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "ProximityTester.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTProximityTester : NSObject <RCTBridgeModule>
@property (nonatomic) ProximityTester *proximityTester;
@end

NS_ASSUME_NONNULL_END
