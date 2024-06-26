// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ExhibitCurated extends ethereum.Event {
  get params(): ExhibitCurated__Params {
    return new ExhibitCurated__Params(this);
  }
}

export class ExhibitCurated__Params {
  _event: ExhibitCurated;

  constructor(event: ExhibitCurated) {
    this._event = event;
  }

  get museumAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get exhibitId(): string {
    return this._event.parameters[1].value.toString();
  }

  get exhibitAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class MuseumCreated extends ethereum.Event {
  get params(): MuseumCreated__Params {
    return new MuseumCreated__Params(this);
  }
}

export class MuseumCreated__Params {
  _event: MuseumCreated;

  constructor(event: MuseumCreated) {
    this._event = event;
  }

  get museumAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get ownerAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TicketPurchased extends ethereum.Event {
  get params(): TicketPurchased__Params {
    return new TicketPurchased__Params(this);
  }
}

export class TicketPurchased__Params {
  _event: TicketPurchased;

  constructor(event: TicketPurchased) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get exhibit(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Museum extends ethereum.SmartContract {
  static bind(address: Address): Museum {
    return new Museum("Museum", address);
  }

  exhibits(param0: string): Address {
    let result = super.call("exhibits", "exhibits(string):(address)", [
      ethereum.Value.fromString(param0),
    ]);

    return result[0].toAddress();
  }

  try_exhibits(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall("exhibits", "exhibits(string):(address)", [
      ethereum.Value.fromString(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  usdcToken(): Address {
    let result = super.call("usdcToken", "usdcToken():(address)", []);

    return result[0].toAddress();
  }

  try_usdcToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("usdcToken", "usdcToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyTicketOwnership(exhibitId: string, user: Address): boolean {
    let result = super.call(
      "verifyTicketOwnership",
      "verifyTicketOwnership(string,address):(bool)",
      [ethereum.Value.fromString(exhibitId), ethereum.Value.fromAddress(user)],
    );

    return result[0].toBoolean();
  }

  try_verifyTicketOwnership(
    exhibitId: string,
    user: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyTicketOwnership",
      "verifyTicketOwnership(string,address):(bool)",
      [ethereum.Value.fromString(exhibitId), ethereum.Value.fromAddress(user)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _usdcToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CurateExhibitCall extends ethereum.Call {
  get inputs(): CurateExhibitCall__Inputs {
    return new CurateExhibitCall__Inputs(this);
  }

  get outputs(): CurateExhibitCall__Outputs {
    return new CurateExhibitCall__Outputs(this);
  }
}

export class CurateExhibitCall__Inputs {
  _call: CurateExhibitCall;

  constructor(call: CurateExhibitCall) {
    this._call = call;
  }

  get exhibitId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get exhibit(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CurateExhibitCall__Outputs {
  _call: CurateExhibitCall;

  constructor(call: CurateExhibitCall) {
    this._call = call;
  }
}

export class PurchaseTicketCall extends ethereum.Call {
  get inputs(): PurchaseTicketCall__Inputs {
    return new PurchaseTicketCall__Inputs(this);
  }

  get outputs(): PurchaseTicketCall__Outputs {
    return new PurchaseTicketCall__Outputs(this);
  }
}

export class PurchaseTicketCall__Inputs {
  _call: PurchaseTicketCall;

  constructor(call: PurchaseTicketCall) {
    this._call = call;
  }

  get exhibitId(): string {
    return this._call.inputValues[0].value.toString();
  }

  get usdcAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PurchaseTicketCall__Outputs {
  _call: PurchaseTicketCall;

  constructor(call: PurchaseTicketCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
