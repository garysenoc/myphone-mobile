//
//  DeviceInformation.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 12/04/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface DeviceInformation : NSObject

@property BOOL isSIMPresent;
@property NSString *manufacturer;
@property NSString *modelName;
@property NSString *memorySize;
@property NSString *commercialMemorySize;
@property NSString *IMEI;
@property NSString *serialNumber;
@property Boolean jailBreak;
@property Boolean simPresent;
@property Boolean internetPresent;
@property NSString *carrier;
@property NSString *chargingStatus;
@property NSString *productType;
@property bool hasCellular;

@end
