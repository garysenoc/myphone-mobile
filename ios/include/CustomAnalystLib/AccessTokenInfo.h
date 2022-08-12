//
//  AccessTokenInfo.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 28/06/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface AccessTokenInfo : NSObject

@property NSString* transactionID;
@property NSString* status;
@property NSString* accessToken;
@property NSString* grantType;
@property NSString* baseURL;
@property NSString* startTime;
@property NSString* startDate;

+ (AccessTokenInfo *) sharedToken;

@end
