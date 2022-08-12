//
//  Support.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 13/02/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface Support : NSObject

+ (int) deviceIdentity;

+ (Boolean) isDeviceXModel;
+ (Boolean) isDeviceFullScreen;
+ (Boolean) hasTouchID;
+ (Boolean) hasFaceID;
+ (Boolean) hasHomeButton;

@end
