module BootstrapHelper
  def bootstrap_label(title,opts={})
    c = ['label', opts[:class]].join(' ')
    content_tag :span, title, class: c
  end

  def dependencies_tooltip(dependencies)
    header = content_tag(:strong,pluralize(dependencies.count,'dependency'))
    [header, dependencies.map(&:human_name)].flatten.join('<br />')
  end

  def pairs_tooltip(pairs)
    header = content_tag(:strong,pluralize(pairs.count,'pair'))
    [header, pairs.map(&:human_name)].flatten.join('<br />')
  end

  def params_tooltip(params)
    header = content_tag(:strong,pluralize(params.count,'parameter'))
    [header, params.map(&:name)].flatten.join('<br />')
  end
end
