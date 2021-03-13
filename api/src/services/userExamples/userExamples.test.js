import {
  userExamples,
  userExample,
  createUserExample,
  updateUserExample,
  deleteUserExample,
} from './userExamples'

describe('userExamples', () => {
  scenario('returns all userExamples', async (scenario) => {
    const result = await userExamples()

    expect(result.length).toEqual(Object.keys(scenario.userExample).length)
  })

  scenario('returns a single userExample', async (scenario) => {
    const result = await userExample({ id: scenario.userExample.one.id })

    expect(result).toEqual(scenario.userExample.one)
  })

  scenario('creates a userExample', async (scenario) => {
    const result = await createUserExample({
      input: { email: 'String2351996' },
    })

    expect(result.email).toEqual('String2351996')
  })

  scenario('updates a userExample', async (scenario) => {
    const original = await userExample({ id: scenario.userExample.one.id })
    const result = await updateUserExample({
      id: original.id,
      input: { email: 'String1153662' },
    })

    expect(result.email).toEqual('String1153662')
  })

  scenario('deletes a userExample', async (scenario) => {
    const original = await deleteUserExample({
      id: scenario.userExample.one.id,
    })

    const result = await userExample({ id: original.id })

    expect(result).toEqual(null)
  })
})
