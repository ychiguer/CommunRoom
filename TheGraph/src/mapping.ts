import { BigInt } from "@graphprotocol/graph-ts"
import { Contract, Connected, MsgSent } from "../generated/Contract/Contract"
import { Owner, Message } from "../generated/schema"

export function handleConnected(event: Connected): void {
  let entity = Owner.load(event.transaction.from.toHex())

  if (!entity) {
    entity = new Owner(event.transaction.from.toHex())

  }

  entity.save()

}

export function handleMsgSent(event: MsgSent): void {

  let entity = new Message(event.transaction.from.toHex())

  entity._message = event.params._message

  entity._owner = event.params._owner

  entity.save()
}
