//
//  PricingMatrix.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 12/06/19.
//  Copyright © 2019 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Test.h"
#import "CosmeticTest.h"

NS_ASSUME_NONNULL_BEGIN

@interface PricingMatrix : NSObject {

}

+ (id)sharedInstance;
@property NSMutableArray *configuredTest;
@property NSMutableArray *configuredVCTest;
@property NSMutableDictionary *pricePerGrade;
@property NSMutableDictionary *pricePerMemory;
@property NSMutableDictionary *pricePerCarrier;
@property NSDictionary *testList;
@property NSString *basePrice;
@property NSString *offerPrice;
@property CosmeticTest *cosmeticTest;
@property CosmeticTest *declineReasons;
@property BOOL isDodgy;
@property BOOL isOfferAccepted;

- (NSString *)getTestName:(TestType) test;
- (Test *)getTest:(TestType)test;
- (void) createTestList:(NSArray *)testList;
- (void) setGradePerTest:(NSDictionary *)gradeList;
- (NSString *)getTestGrade: (Test *)test;
- (NSString *) getJsonString;

@end

NS_ASSUME_NONNULL_END

