//
//  GPSTester.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 27/03/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <CoreLocation/CoreLocation.h>

@protocol GPSLocationDelegate <NSObject>
- (void) gpsLocationDetected;
- (void) gpsPermissionDenied;
- (void) gpsTestStarted;
@end

@interface GPSTester : NSObject <CLLocationManagerDelegate>

@property CLLocationManager *locationManager;
@property NSTimer *myGPSTimer;
- (void) startListenForGPS;
- (void) stopListenForGPS;
@property id <GPSLocationDelegate> delegate;

@end
