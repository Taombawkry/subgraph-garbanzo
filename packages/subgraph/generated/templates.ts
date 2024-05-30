// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext,
} from "@graphprotocol/graph-ts";

export class ArtifactNFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ArtifactNFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "ArtifactNFT",
      [address.toHex()],
      context,
    );
  }
}

export class ExhibitNFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ExhibitNFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "ExhibitNFT",
      [address.toHex()],
      context,
    );
  }
}

export class EventEscrow extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("EventEscrow", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "EventEscrow",
      [address.toHex()],
      context,
    );
  }
}
