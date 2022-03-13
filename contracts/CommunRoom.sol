// SPDX-License-Identifier: Unlicense
pragma solidity >=0.7.0 <0.9.0;

/// @title CommunRoom
/// @author Youssef Chiguer
/// @notice This is an interface for a chat Commun Room

interface CommunRoom {
    /// @notice Connect to the Commun Room
    /// The connect function is payable and can only be invoked if the owner doesn't
    /// have a connection
    function connect() external payable;

    /// @dev connect can be called for other than msg.sender hence the parameter
    /// @param _owner The address of the sender and future owner of the Connection
    function connect(address _owner) external payable;

    /// @notice Send a message through the Commun Room if in possession
    /// of a connection
    /// @param _message The message to be sent
    /// @return hash of the message and the connection
    function send(string calldata _message) external returns (bytes32);

    /// @notice Fill up the message credit for a connection
    /// This is a payable function
    function fillUp() external payable;

    /// @notice Transfer the connection to another owner
    /// @dev The connections are owned by the contract and all
    /// transfers are made within the contract since the connection's
    /// is not shared with the owner and every intercation goes by the
    /// Commun Room
    /// @param _newOwner The new owner of the connection
    function transferConnection(address _newOwner) external;

    /// @notice Consult credit
    /// @return The credit left on the connection
    function credit() external returns (uint256);

    /// This emits when connected to the Commun Room
    event Connected(address indexed _owner);

    /// This emits when a message is sent
    event MsgSent(address indexed _owner, string indexed _message);
}
