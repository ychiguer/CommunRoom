// SPDX-License-Identifier: Unlicense
pragma solidity >=0.7.0 <0.9.0;

import "./Ownable.sol";

/// @title Connection
/// @author Youssef Chiguer
/// @notice This is an ownable contract for connections to the Commun Room
/// Connections can be sold and traded and they are fungible

contract Connection is Ownable {
    uint256 private _credit;

    /// @notice The construction of the connection with an initial credit
    constructor(uint256 _value) {
        require(_value > 0);

        _credit = _value;
    }

    /// @notice Getter for the credit
    /// @return value of the credit
    function credit() public view returns (uint256) {
        return _credit;
    }

    /// @notice Fill up the credit for the connection
    /// @param _value The value in wei to accredit the connection
    function fillUp(uint256 _value) public onlyOwner {
        require(_value > 0);

        _credit += _value;

        emit filledUp(address(this), _value);
    }

    /// @notice pay from the credit
    /// @param _value The value in wei to take from the connection
    function payUp(uint256 _value) public onlyOwner {
        require(_value > 0);

        _credit -= _value;
    }

    /// This emits when a connection is accredited
    event filledUp(address indexed _connection, uint256 indexed _value);
}
