//
//  WifiTester.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 26/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol WiFiResultDelegate <NSObject>
- (void) wifiTestCompleted: (BOOL) result;
@end

@interface WifiTester : NSObject

-(void) testWifi;

@property id <WiFiResultDelegate> delegate;

@end
