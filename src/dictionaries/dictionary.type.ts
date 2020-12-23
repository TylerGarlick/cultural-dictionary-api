import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export default class Dictionary {

  @Field()
  name: string = ``

  @Field({ nullable: true })
  description?: string = ``

  @Field({ nullable: true })
  primaryLanguage?: string = `US-en`

  @Field()
  isActive: boolean = true

}