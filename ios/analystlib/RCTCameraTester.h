//
//  RCTCameraTester.h
//  MyPhoneApp
//
//  Created by Adrian Vincent Aguilar on 8/13/22.
//

#import <React/RCTBridgeModule.h>
#import "CameraTestViewController.h"

NS_ASSUME_NONNULL_BEGIN

@interface RCTCameraTester : NSObject <RCTBridgeModule>
@property (nonatomic) CameraTestViewController *cameraTestViewController;
@end

NS_ASSUME_NONNULL_END
