//
//  CollectInfo.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 06/07/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "DeviceInformation.h"
#import "Support.h"

NS_ASSUME_NONNULL_BEGIN

@interface CollectInfo : NSObject

- (DeviceInformation *) collectAllInfo;
- (BOOL) isIntenetAvailable;
- (NSString *) getChargingStatus;

@end

NS_ASSUME_NONNULL_END
