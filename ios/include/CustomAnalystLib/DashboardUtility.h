//
//  DashboardUtility.h
//  CustomAnalystLib
//
//  Created by Priyank Joshi on 27/06/18.
//  Copyright © 2018 Priyank Joshi. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "AccessTokenInfo.h"
#import "TestResults.h"
#import "DeviceInformation.h"
#import <CommonCrypto/CommonDigest.h>
#import <CommonCrypto/CommonCryptor.h>
#import "PricingMatrix.h"
#import "Test.h"
#import "DeclineOfferFeedback.h"
#import "CustomerDetails.h"

@protocol DashboarUtilityDelegate <NSObject>
@optional
- (void) accessTokenReceived: (AccessTokenInfo *)accessTokenInfo;
- (void) failedToGetAccessToken;
- (void) reportSubmitted;
- (void) failedToReport;
- (void) usernameFound;
- (void) usernameNotFound;
- (void) deviceInfoFound: (NSString *)model makeAs:(NSString *)make;
- (void) deviceInfoNotFound;
- (void) FMIPInfoFound : (BOOL) isActivated;
- (void) priceDetailsFound: (PricingMatrix *)pricingMatrix;
- (void) priceDetailsNotFound;
- (void) feedbackSubmitted;
- (void) errorSubmittingFeedback;
- (void) otpGenerated: (NSString *)otp;
- (void) failedToGenerateOTP;
- (void) failedToVerifyOTP;
- (void) otpVerified:(NSString *)uniqueID withOS:(NSString *)os withProduct:(NSString *)productType;
- (void) otpVerified:(NSString *)uniqueID withOS:(NSString *)os withProduct:(NSString *)productType siteCode:(NSString *)siteCode;
- (void) otpVerified:(NSString *)uniqueID withOS:(NSString *)os withProduct:(NSString *)productType siteCode:(NSString *)siteCode withIMEI:(NSString *)imei;
@end

typedef enum {
    GET_ACCESS_TOKEN,
    VALIDATE_USER,
    SUBMIT_REPORT,
    GET_PRICE,
    GET_DEVICE_INFO,
    GET_FMIP_INFO,
    DECLINE_OFFER_FEEDBACK,
    GENERATE_OTP,
    VALIDATE_OTP
    
} DashboardCall;

@interface DashboardUtility : NSObject <NSXMLParserDelegate>

@property DashboardCall callType;

- (void)getAccessToken:(NSString *)URL forDevice:(NSString *)device_id usingKey:(NSString *)appKey;

- (void)submitDeclineOfferReport:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token withFeedback:(DeclineOfferFeedback *)feedback withDeviceInfo:(DeviceInformation *)info forUser:(NSString *)username
withBasePrice:(NSString *)basePrice isDodgy:(Boolean) isDeviceDodgy;

- (void)submitDeclineOfferReport:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token withFeedback:(DeclineOfferFeedback *)feedback withDeviceInfo:(DeviceInformation *)info withMartix:(PricingMatrix *)results forUser:(NSString *)username;

- (void)submitReport:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token withResults:(TestResults *)results withDeviceInfo:(DeviceInformation *)info;

- (void)submitReportForUser:(NSString *)username at:(NSString *)URL forDevice:(NSString *)device_id forModel:(NSString *)modelNumber  usingToken:(AccessTokenInfo *)token withMatrix:(PricingMatrix *)results withCustomerDetails:(CustomerDetails *)details withDeviceInfo:(DeviceInformation *)info;

- (void)submitReportForUser:(NSString *)username at:(NSString *)URL forDevice:(NSString *)device_id forModel:(NSString *)modelNumber  usingToken:(AccessTokenInfo *)token withMatrix:(PricingMatrix *)results withCustomerDetails:(CustomerDetails *)details withDeviceInfo:(DeviceInformation *)info withCosmeticTest:(CosmeticTest *)cosmetics;

- (void)submitReportForUser:(NSString *)username at:(NSString *)URL forDevice:(NSString *)device_id forModel:(NSString *)modelNumber  usingToken:(AccessTokenInfo *)token withMatrix:(PricingMatrix *)results withDeviceInfo:(DeviceInformation *)info;

- (void)submitReportForUser:(NSString *)username at:(NSString *)URL forDeviceID:(NSString *)device_id usingToken:(AccessTokenInfo *)token withMatrix:(PricingMatrix *)results withDeviceInfo:(DeviceInformation *)info withCustomFields:(NSDictionary *)customFields;

- (void)submitReportForUser:(NSString *)username at:(NSString *)URL forDeviceID:(NSString *)device_id usingToken:(AccessTokenInfo *)token withMatrix:(PricingMatrix *)results withDeviceInfo:(DeviceInformation *)info withCustomFields:(NSDictionary *)customFields withCosmeticTest:(CosmeticTest *)cosmeticTest;

- (void)validateUser:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token withUsername:(NSString*) username withPassword:(NSString *)password;

-(void)checkGSMAForDevice:(NSString *)IMEI withAuth:(NSString *)auth completionBlock:(void (^)(NSError *, BOOL))completionBlock;

-(NSString *) getAuthForIMEI: (NSString *)IMEI withAPIKey:(NSString *)APIKey withPassword:(NSString *)Password
              withSaltString:(NSString *)Salt_String withOrganizationID:(NSString *)Organization_Id withSecretKey:(NSString *)Secretkey;

- (void)getPricingMatrix:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token forIMEI:(NSString*) IMEI forModel:(NSString *)model forModelNumber:(NSString *)modelNumber;

- (void)getPricingMatrix:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token forModel:(NSString *)model forModelNumber:(NSString *)modelNumber;

- (void)getDeviceInfo:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token forIMEI:(NSString*) IMEI;

- (void)getFMIPInfo:(NSString *)URL forDevice:(NSString *)device_id usingToken:(AccessTokenInfo *)token forIMEI:(NSString*) IMEI;

- (void)generateOTP:(NSString *)URL forDevice:(NSString *)device_id forIMEI:(NSString *)IMEI forNumber:(NSString *)mobileNumber usingToken:(AccessTokenInfo *)token;

- (void)validateOTP:(NSString *)URL withOTP:(NSString *)otp forDeviceID:(NSString *)deviceID usingToken:(AccessTokenInfo *)token;

- (void)submitReportForUserCommonFunc:(NSString *)username at:(NSString *)URL forDevice:(NSString *)device_id forModel:(NSString *)modelNumber  usingToken:(AccessTokenInfo *)token withMatrix:(PricingMatrix *)priceMatrics withCustomerDetails:(CustomerDetails *)details withDeviceInfo:(DeviceInformation *)info  withCosmeticTest:(CosmeticTest *)cosmetics  withCustomFields:(NSDictionary *)customFields;

- (NSString *) reportXMLWithMatrixCommonFunc :(PricingMatrix *)pricingMatrics  withDeviceInfo:(DeviceInformation *)info withDeviceID:(NSString *)deviceID
  forModel:(NSString *)modelNumber usingToken:(AccessTokenInfo *)token   forUser:(NSString *)username withCustomFields:(NSDictionary *) customFields withCosmeticTests:(CosmeticTest *)cosmeticTest;





@property id <DashboarUtilityDelegate> delegate;

@end



