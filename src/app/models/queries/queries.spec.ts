import { Uint8HexPipe } from '../../pipes/uint8-hex.pipe';
import { Queries } from './queries';
import { Query } from './query';

describe("Queries", () => {
  const uint8HexPipe = new Uint8HexPipe();

  it("should contains only 8 or less characters display names", () => {
    const queries = Object.entries(Queries).map(_ => _[1] as Query);
    for (const query of queries) {
      expect(query.displayName.length).withContext(`Query ${query.displayName} are over display name length limit`).toBeLessThanOrEqual(9);
    }
  });

  it("should contains only unique addresses", () => {
    const queriesByAddress: { [address: string]: Query[] } = {};
    const queries = Object.entries(Queries).map(_ => _[1] as Query);
    for (const query of queries) {
      for (const address of query.addresses) {
        const addressInHex = uint8HexPipe.transform(address);
        if (queriesByAddress[addressInHex] === undefined) queriesByAddress[addressInHex] = [];
        queriesByAddress[addressInHex].push(query);
      }
    }

    for (const [address, queries] of Object.entries(queriesByAddress)) {
      expect(queries.length).withContext(`Address ${address} are used by multiple queries`).toBe(1);
    }
  });

  it("should contains only unique property names", () => {
    const queriesByPropertyName: { [address: string]: Query[] } = {};
    const queries = Object.entries(Queries).map(_ => _[1] as Query);
    for (const query of queries) {
      if (queriesByPropertyName[query.propertyName] === undefined) queriesByPropertyName[query.propertyName] = [];
      queriesByPropertyName[query.propertyName].push(query);
    }

    for (const [propertyName, queries] of Object.entries(queriesByPropertyName)) {
      expect(queries.length).withContext(`Property name ${propertyName} are used by multiple queries`).toBe(1);
    }
  });

  it("should contains only unique display names", () => {
    const queriesByDisplayName: { [address: string]: Query[] } = {};
    const queries = Object.entries(Queries).map(_ => _[1] as Query);
    for (const query of queries) {
      if (queriesByDisplayName[query.displayName] === undefined) queriesByDisplayName[query.displayName] = [];
      queriesByDisplayName[query.displayName].push(query);
    }

    for (const [displayName, queries] of Object.entries(queriesByDisplayName)) {
      expect(queries.length).withContext(`Display name ${displayName} are used by multiple queries`).toBe(1);
    }
  });
});
