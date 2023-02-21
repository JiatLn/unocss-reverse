import { remTransform } from '../share/rem'

export const width = {
  name: 'width',
  match: (ctx: string) => {
    const basicName = 'w-'
    let suffix = ctx
    if (/rem/.test(ctx))
      suffix = remTransform(ctx)
    else if (/-content/.test(ctx))
      suffix = ctx.replace('-content', '')

    return basicName + suffix
  },
}
