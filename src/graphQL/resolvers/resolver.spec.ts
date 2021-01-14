import resolvers from './user.resolver';

describe('post', () => {
  it('creates a user', async () => {
    const result = resolvers.Mutation.post(
      null,
      {
        firstName: 'firstName',
        lastName: 'lastName',
      },
    );
 
    await expect(result).resolves.toEqual(true);
  });
});