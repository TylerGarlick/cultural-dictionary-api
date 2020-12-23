import { Query, Resolver } from 'type-graphql'
import Dictionary from './dictionary.type'

@Resolver(() => Dictionary)
export class DictionaryResolver {

  @Query(() => [Dictionary])
  async dictionaries(): Promise<Dictionary[]> {
    return [{ name: 'test', description: 'descp', isActive: true, primaryLanguage: 'EN-us' }] as Dictionary[]
  }

}