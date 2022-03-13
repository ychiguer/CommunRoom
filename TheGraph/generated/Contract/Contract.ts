// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Connected extends ethereum.Event {
  get params(): Connected__Params {
    return new Connected__Params(this);
  }
}

export class Connected__Params {
  _event: Connected;

  constructor(event: Connected) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MsgSent extends ethereum.Event {
  get params(): MsgSent__Params {
    return new MsgSent__Params(this);
  }
}

export class MsgSent__Params {
  _event: MsgSent;

  constructor(event: MsgSent) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _message(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  credit(): BigInt {
    let result = super.call("credit", "credit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_credit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("credit", "credit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  send(_message: string): Bytes {
    let result = super.call("send", "send(string):(bytes32)", [
      ethereum.Value.fromString(_message)
    ]);

    return result[0].toBytes();
  }

  try_send(_message: string): ethereum.CallResult<Bytes> {
    let result = super.tryCall("send", "send(string):(bytes32)", [
      ethereum.Value.fromString(_message)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConnectCall extends ethereum.Call {
  get inputs(): ConnectCall__Inputs {
    return new ConnectCall__Inputs(this);
  }

  get outputs(): ConnectCall__Outputs {
    return new ConnectCall__Outputs(this);
  }
}

export class ConnectCall__Inputs {
  _call: ConnectCall;

  constructor(call: ConnectCall) {
    this._call = call;
  }
}

export class ConnectCall__Outputs {
  _call: ConnectCall;

  constructor(call: ConnectCall) {
    this._call = call;
  }
}

export class Connect1Call extends ethereum.Call {
  get inputs(): Connect1Call__Inputs {
    return new Connect1Call__Inputs(this);
  }

  get outputs(): Connect1Call__Outputs {
    return new Connect1Call__Outputs(this);
  }
}

export class Connect1Call__Inputs {
  _call: Connect1Call;

  constructor(call: Connect1Call) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class Connect1Call__Outputs {
  _call: Connect1Call;

  constructor(call: Connect1Call) {
    this._call = call;
  }
}

export class FillUpCall extends ethereum.Call {
  get inputs(): FillUpCall__Inputs {
    return new FillUpCall__Inputs(this);
  }

  get outputs(): FillUpCall__Outputs {
    return new FillUpCall__Outputs(this);
  }
}

export class FillUpCall__Inputs {
  _call: FillUpCall;

  constructor(call: FillUpCall) {
    this._call = call;
  }
}

export class FillUpCall__Outputs {
  _call: FillUpCall;

  constructor(call: FillUpCall) {
    this._call = call;
  }
}

export class SendCall extends ethereum.Call {
  get inputs(): SendCall__Inputs {
    return new SendCall__Inputs(this);
  }

  get outputs(): SendCall__Outputs {
    return new SendCall__Outputs(this);
  }
}

export class SendCall__Inputs {
  _call: SendCall;

  constructor(call: SendCall) {
    this._call = call;
  }

  get _message(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SendCall__Outputs {
  _call: SendCall;

  constructor(call: SendCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class TransferConnectionCall extends ethereum.Call {
  get inputs(): TransferConnectionCall__Inputs {
    return new TransferConnectionCall__Inputs(this);
  }

  get outputs(): TransferConnectionCall__Outputs {
    return new TransferConnectionCall__Outputs(this);
  }
}

export class TransferConnectionCall__Inputs {
  _call: TransferConnectionCall;

  constructor(call: TransferConnectionCall) {
    this._call = call;
  }

  get _newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferConnectionCall__Outputs {
  _call: TransferConnectionCall;

  constructor(call: TransferConnectionCall) {
    this._call = call;
  }
}
