//
//  ProximityTester.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 25/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol ProximitySensorDelegate <NSObject>
- (void) proximitySensorDetected;
@end

@interface ProximityTester : NSObject

@property id <ProximitySensorDelegate> delegate;

- (void) listenForProximity;
- (BOOL) isProximitySupported;
- (void) stopProximityTest;

@end
